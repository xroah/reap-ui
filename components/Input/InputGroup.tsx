import * as React from "react"
import PropTypes from "prop-types"
import {classNames} from "../utils"
import {InputGroupContext} from "../Common/contexts"
import {CommonProps} from "../Common/CommonPropsInterface"

export interface InputGroupProps extends CommonProps<HTMLDivElement> {
    size?: "sm" | "lg"
}

export default function InputGroup(props: InputGroupProps) {
    const {
        children,
        size,
        className,
        ...otherProps
    } = props
    const PREFIX = "input-group"

    return (
        <InputGroupContext.Provider value={true}>
            <div className={
                classNames(
                    className,
                    PREFIX,
                    size && `${PREFIX}-${size}`
                )
            } {...otherProps}>
                {children}
            </div>
        </InputGroupContext.Provider>
    )
}

InputGroup.propTypes = {
    size: PropTypes.oneOf(["lg", "sm"])
}