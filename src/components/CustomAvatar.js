import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';

const CustomAvatar = ({
    src = undefined,
    children,
    fallbackContent = '', // Fallback text (e.g., initials or any text)
    size = 40,
    shape = 'circle',
    className = 'border-0 cursor-pointer',
    style = {},
    objectFit = 'cover',
    draggable = false,
    ...restProps
}) => {
    // Merge objectFit into the style object
    const avatarStyle = {
        ...style,
        objectFit,
    };

    return (
        <Avatar
            {...restProps}
            size={size}
            src={src || undefined} // Use `src` if available, else fallback
            shape={shape}
            draggable={draggable}
            className={className}
            style={avatarStyle}
        >
            {src ? null : children || fallbackContent} {/* Show children or fallback content when `src` is not provided */}
        </Avatar>
    );
};

CustomAvatar.propTypes = {
    src: PropTypes.any,
    fallbackContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    shape: PropTypes.oneOf(['circle', 'square']),
    className: PropTypes.string,
    style: PropTypes.object,
    objectFit: PropTypes.oneOf(['contain', 'cover', 'fill', 'none', 'scale-down']),
    draggable: PropTypes.bool,
    children: PropTypes.node, // Accept children as well
};

export default CustomAvatar;
