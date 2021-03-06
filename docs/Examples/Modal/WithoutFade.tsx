import * as React from "react"
import {
    Modal, Button 
} from "reap-ui"

export default () => {
    const [visible, setVisible] = React.useState(false)
    const toggle = () => setVisible(!visible)

    return (
        <>
            <Button onClick={toggle}>Launch demo modal</Button>
            <Modal
                visible={visible}
                title="Modal title"
                fade={false}
                onCancel={toggle}>
                Woohoo, you're reading this text in a modal!
            </Modal>
        </>
    )
}