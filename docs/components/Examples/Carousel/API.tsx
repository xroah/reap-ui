import * as React from "react";
import PropsTable from "../../PropsTable";
import DocHeading from "../../DocHeading";
import NoAPI from "../../NoAPI";

const CarouselProps = [{
    name: "animation",
    type: `"slide" | "fade"`,
    default: "slide",
    description: "Slide effect"
}, {
    name: "controls",
    type: "boolean",
    default: "true",
    description: "Show previous and next arrows for changing the active slide"
}, {
    name: "indicators",
    type: "boolean",
    default: "true",
    description: "Show slide position indicators"
}, {
    name: "activeIndex",
    type: "number",
    default: "0",
    description: "The index of active slide"
}, {
    name: "interval",
    type: "number",
    default: "5000",
    description: "The interval for changing the active slide."
}, {
    name: "pauseOnHover",
    type: "boolean",
    default: "true",
    description: "Pause when mouse hovers the slide"
}, {
    name: "touch",
    type: "boolean",
    default: "true",
    description: "Support left/right swipe interactions on touchscreen devices or not."
}, {
    name: "onSlide",
    type: "Function",
    description: "Callback when the slide started"
}, {
    name: "onSlid",
    type: "Function",
    description: "Callback when the carousel has completed its slide transition"
},];

export default () => (
    <>
        <DocHeading>API</DocHeading>
        <PropsTable title="Carousel" data={CarouselProps} />
        <NoAPI title="Carousel.Item" />
    </>
);