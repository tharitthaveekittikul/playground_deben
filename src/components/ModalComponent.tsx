type AlertProps = {
  message: string;
  description: string;
  onClose: () => void;
};

function ModalComponent({ message, description, onClose }: AlertProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-3/4 pt-6">
        <p className="mb-2 text-center text-2xl font-semibold">{message}</p>
        <p className="mb-4 text-center text-xl">{description}</p>
        <div className="bg-slate-300 h-[1px]"></div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="text-blue-500 font-bold px-4 py-3 rounded text-2xl"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
