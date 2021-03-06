import * as React from "react"
import { Nav } from "reap-ui"

const { Link } = Nav

export default () => (
    <Nav vertical>
        <Link active href="#">Active</Link>
        <Link href="#">Link</Link>
        <Link href="#">Link</Link>
        <Link disabled href="#">Disabled</Link>
    </Nav>
)