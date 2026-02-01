"use client"

import { Button } from "@/components/ui/button"

export default function DemoPage() {

    const handleGenerateText = async () => {
        const response = await fetch('/api/demo', {
            method: 'POST',
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <h1>Google Generative AI Demo</h1>
            <p>This is a demo page for Google Generative AI integration.</p>
            <Button onClick={handleGenerateText}>
                Generate Text
            </Button>
        </div>
    )
}