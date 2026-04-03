import Checkbox from "@m3/components/Checkbox";
import { Button } from "@m3/index";

export default function ButtonPage() {
    return (
        <div>
            <p className="typescale-display-small">Button 컴포넌트</p>
            <div className="grid grid-cols-3 grid-rows-5">
                <Button className="row-1 col-1" variant="elevated">Elevated button</Button>
                <Button className="row-1 col-2" variant="elevated" selected={false}>Elevated unselected</Button>
                <Button className="row-1 col-3" variant="elevated" selected={true}>Elevated selected</Button>

                <Button className="row-2 col-1" variant="filled">Filled button</Button>
                <Button className="row-2 col-2" variant="filled" selected={false}>Filled unselected</Button>
                <Button className="row-2 col-3" variant="filled" selected={true}>Filled selected</Button>

                <Button className="row-3 col-1" variant="tonal">Tonal button</Button>
                <Button className="row-3 col-2" variant="tonal" selected={false}>Tonal unselected</Button>
                <Button className="row-3 col-3" variant="tonal" selected={true}>Tonal selected</Button>

                <Button className="row-4 col-1" variant="outlined">Outlined button</Button>
                <Button className="row-4 col-2" variant="outlined" selected={false}>Outlined unselected</Button>
                <Button className="row-4 col-3" variant="outlined" selected={true}>Outlined selected</Button>

                <Button className="row-5 col-1" variant="text">Text button</Button>
                <Button className="row-5 col-2" variant="text" selected={false}>Text unselected</Button>
                <Button className="row-5 col-3" variant="text" selected={true}>Text selected</Button>
            </div>

            <Checkbox />
        </div>
    )
}