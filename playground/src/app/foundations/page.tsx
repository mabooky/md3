'use client';

import { Button, ButtonProps, Card } from "@m3/index";
import { useState } from "react";

const FoundationsItems = [
    { title: "Accessibility", description: "Accessible design enables users with diverse abilities to navigate, understand, and enjoy a UI." },
    { title: "Content design", description: "UX writing and information design make UIs easy to use." },
]

export default function FoundationsPage() {
    return (
        <main className="relative w-full h-full pt-16 bg-surface">
            <div className="rounded-2xl bg-secondary-container px-8 py-4">
                <p className="typescale-emphasized-display-large">Foundations</p>
                <p className="typescale-headline-medium mt-2">Foundations inform the basis of any great user interface, from accessibility standards to essential patterns for layout and interaction.</p>
            </div>
            {FoundationsItems.map((item) => (
                <Card 
                    key={item.title} 
                    variant="outlined"
                    className="mt-4"
                    containerClassName="p-4"
                    actionable>
                    <p className="typescale-emphasized-headline-small">{item.title}</p>
                    <p className="typescale-body-medium">{item.description}</p>
                </Card>
            ))}
        </main>
    )
}