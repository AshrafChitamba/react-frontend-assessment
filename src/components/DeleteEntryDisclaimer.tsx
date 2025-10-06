type DeleteEntryDisclaimerProps = {
  opened: boolean;
  onClose(): void;
  onDelete(): void;
};

export const DeleteEntryDisclaimer = (props: DeleteEntryDisclaimerProps) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-60 ${
        props.opened ? "grid place-content-center" : "hidden"
      } w-full bg-black/40 backdrop-blur-[2px] p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full select-none`}
    >
      <div className="p-5 relative min-w-[280px] sm:w-[400px] xl:w-[500px] bg-white shadow-sm dark:bg-white transition-all duration-500 ease">
        <h3 className="text-xl whitespace-nowrap font-semibold text-gray-900">
          Are you sure?
        </h3>

        <div className="space-y-6 mt-1.5">
          <p className="text-[#627084] text-sm">
            This action cannot be undone. This will permanently delete the
            knowledge entry.
          </p>
        </div>
        <div className="flex items-center justify-end pt-3 pb-1 space-x-2">
          <button
            type="button"
            className="text-[#627084] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-hidden border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 cursor-pointer"
            onClick={props.onClose}
          >
            cancel
          </button>

          <button
            type="button"
            className="text-white capitalize bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-hidden font-medium text-sm px-5 py-2.5 text-center cursor-pointer"
            onClick={props.onDelete}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
