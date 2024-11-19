'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardContent className="pt-6">
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="old-password">Old Password</Label>
                        <Input
                            id="old-password"
                            required
                            type="password"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            id="new-password"
                            required
                            type="password"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                            id="confirm-password"
                            required
                            type="password"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="flex gap-4 pt-4">
                        <Button
                            variant="outline"
                            className="flex-1"
                            disabled={isLoading}
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1"
                            disabled={isLoading}
                        >
                            {isLoading ? "Changing..." : "Change password"}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}