import * as React from "react";
import PropTypes from "prop-types";
import { classNames } from "../utils";
import { CommonProps } from "../CommonPropsInterface";

type colsType = {
    default: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number
};

export interface RowProps extends CommonProps<HTMLDivElement> {
    noGutters?: boolean;
    alignment?: "start" | "center" | "end";
    justify?: "start" | "center" | "end" | "between" | "around";
    form?: boolean;
    cols?: number | colsType;
    minWidth?: "sm" | "md" | "lg" | "md";
}

export default function Row(props: RowProps) {
    const {
        className,
        noGutters,
        alignment,
        justify,
        form,
        cols,
        minWidth,
        ...otherProps
    } = props;
    const JUSTIFY_PREFIX = "justify-content";
    const COL_PREFiX = "row-cols";
    const justifyMap: any = {
        left: `${JUSTIFY_PREFIX}-start`,
        center: `${JUSTIFY_PREFIX}-center`,
        right: `${JUSTIFY_PREFIX}-end`,
        between: `${JUSTIFY_PREFIX}-between`,
        around: `${JUSTIFY_PREFIX}-around`
    };
    const handleCols = () => {
        if (!cols) return;

        if (typeof cols === "number") {
            return `${COL_PREFiX}-${cols}`;
        }

        const {
            default: d,
            sm,
            md,
            lg,
            xl
        } = cols;

        return classNames(
            d && `${COL_PREFiX}-${d}`,
            sm && `${COL_PREFiX}-sm-${sm}`,
            md && `${COL_PREFiX}-md-${md}`,
            lg && `${COL_PREFiX}-lg-${lg}`,
            xl && `${COL_PREFiX}-xl-${xl}`
        );
    };

    return (
        <div className={
            classNames(
                className,
                form ? "form-row" : "row",
                noGutters && "no-gutters",
                alignment && `align-items-${alignment}`,
                justify && justifyMap[justify],
                handleCols()
            )
        } {...otherProps} />
    );
}

Row.propTypes = {
    noGutters: PropTypes.bool,
    alignment: PropTypes.oneOf(["top", "center", "bottom"]),
    justify: PropTypes.oneOf(["left", "center", "right", "between", "around"]),
    form: PropTypes.bool,
    cols: PropTypes.oneOf([
        PropTypes.number,
        PropTypes.shape({
            default: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),
    minWidth: PropTypes.oneOf([
        "sm", 
        "md",
        "lg",
        "md"
    ])
};