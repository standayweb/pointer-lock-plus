import lock from 'pointer-lock';
import fullscreen from 'fullscreen';

const PointerLockPlus = ({
  element = document.body,
  sensitivity = 0.002,
  onAttain = () => {},
  onData = () => {},
  onClose = () => {},
  onRelease = () => {},
  onError = () => {},
}) => {
  const pointer = lock(element);

  pointer.on('attain', (movements) => {
    onAttain();

    // movements is a readable stream
    movements.on('data', (move) => {
      const dx = move.dx * sensitivity;
      const dy = move.dy * sensitivity;
      onData(dx, dy);
    });

    movements.on('close', onClose);
  });

  pointer.on('release', onRelease);

  pointer.on('error', onError);

  // if browser needs fullscreen for pointer lock
  pointer.on('needs-fullscreen', () => {
    const fs = fullscreen(element);
    fs.once('attain', pointer.request);
    fs.request();
  });

  return {
    request: pointer.request,
    release: pointer.release,
    target: pointer.target,
    pointer: pointer.destroy,
  };
};

export default PointerLockPlus;
