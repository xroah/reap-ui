import * as React from "react";
import PropTypes from "prop-types";
import { classNames } from "../utils";

export interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    disabled?: boolean;
    href?: string;
}

export default function NavLink(props: NavLinkProps) {
    const {
        active,
        disabled,
        className,
        ...otherProps
    } = props;

    return (
        <a className={
            classNames(
                className,
                "nav-link",
                active && "active",
                disabled && "disabled"
            )
        } {...otherProps} />
    );
}

NavLink.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    href: PropTypes.string
};
NavLink.defaultProps = {
    active: false,
    disabled: false
};