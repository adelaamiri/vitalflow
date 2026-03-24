
const DynamicButton = ({ text, onClick, bgColor, textColor, hoverColor, size, marginTop }) => {
    const baseClasses = "rounded-full px-5 py-3 font-medium shadow-sm transition-all duration-300";
    const sizeClasses = size === 'sm' ? 'sm:px-6 sm:py-3' : 'lg:inline-flex'; // Handle size variations (e.g. 'sm', 'lg')

    return (
        <button
            className={`${baseClasses} ${sizeClasses} bg-[${bgColor}] hover:bg-[${hoverColor}] hover:-translate-y-0.5`}
            style={{
                color: textColor,       // Inline style for dynamic text color
                marginTop: marginTop    // Inline style for dynamic margin-top
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default DynamicButton;