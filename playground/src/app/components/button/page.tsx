'use client';

import { useState } from "react";
import { Button, Icon } from "@m3/index";

export default function ButtonPage() {
    const [selections, setSelections] = useState([false, false, false, false, false]);

    function toggleSelection(index: number) {
        setSelections(prev => {
            const newSelections = [...prev];
            newSelections[index] = !newSelections[index];
            return newSelections;
        });
    }

    return (
        <div className="mt-16">
            <h1>버튼 컴포넌트</h1>
            <p>버튼은 사용자가 클릭하여 작업을 수행할 수 있도록 하는 컴포넌트입니다. 다양한 스타일과 크기로 제공됩니다.</p>

            <Button 
                size="xs" 
                shape="round" 
                variant="elevated" 
                selected={selections[0]}
                onClick={() => toggleSelection(0)}>
                Elevated Button
                <Icon>edit</Icon>
            </Button>
            <Button size="xs" shape="square" variant="elevated">Elevated Button</Button>
            <br />

            <Button 
                size="sm"
                shape="round" 
                variant="filled" 
                selected={selections[1]}
                onClick={() => toggleSelection(1)}>
                <Icon>edit</Icon>
                Filled Button
            </Button>
            <Button size="sm" shape="square" variant="filled">Filled Button</Button>
            <br />

            <Button
                size="md" 
                shape="round"
                variant="tonal" 
                selected={selections[2]} 
                onClick={() => toggleSelection(2)}>
                <Icon>edit</Icon>
                Tonal Button
            </Button>
            <Button size="md" shape="square" variant="tonal">Tonal Button</Button>
            <br />

            <Button 
                size="lg" 
                shape="round" 
                variant="outlined" 
                selected={selections[3]} 
                onClick={() => toggleSelection(3)}>
                <Icon>edit</Icon>
                Outlined Button
            </Button>
            <Button size="lg" shape="square" variant="outlined">Outlined Button</Button>
            <br />

            <Button 
                size="xl" 
                shape="round" 
                variant="text" 
                selected={selections[4]} 
                onClick={() => toggleSelection(4)}>
                <Icon>edit</Icon>
                Text Button
            </Button>
            <Button size="xl" shape="square" variant="text">Text Button</Button>
        </div>
    )
}