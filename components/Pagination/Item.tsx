import * as React from "react"
import PropTypes from "prop-types"
import {classNames} from "../utils"
import {CommonProps} from "../Common/CommonPropsInterface"

export interface ItemProps extends CommonProps<HTMLElement> {
    active?: boolean
    disabled?: boolean
}

export default function PaginationItem(props: ItemProps) {
    const {
        className,
        children,
        active,
        disabled,
        onClick,
        ...otherProps
    } = props
    const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
        onClick && !disabled && onClick(evt)
        evt.preventDefault()
    }

    return (
        <li className={
            classNames(
                className,
                "page-item",
                active && "active",
                disabled && "disabled"
            )
        }>
            <a
                href="#"
                className="page-link"
                tabIndex={disabled ? -1 : undefined}
                onClick={handleClick}
                {...otherProps}>
                {children}
            </a>
        </li>
    )
}

PaginationItem.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool
}
PaginationItem.defaultProps = {
    active: false,
    disabled: false
}