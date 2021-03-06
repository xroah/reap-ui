import * as React from "react"
import {
    Dropdown, Tooltip 
} from "reap-ui"

export default () => {
    const overlay = (
        <Dropdown.Menu header="Dropdown header">
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item href="#" disabled>Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </Dropdown.Menu>
    )

    return (
        <Dropdown.Button
            split
            variant="secondary"
            overlay={overlay}
            render={([leftBtn, rightBtn]) => [
                <Tooltip title="Tooltip">
                    {leftBtn}
                </Tooltip>,
                React.cloneElement(rightBtn, {
                    onClick: () => alert("click")
                })
            ]}>
            Split button
        </Dropdown.Button>
    )
}