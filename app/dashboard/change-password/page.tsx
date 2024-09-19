import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function ChangePasswordPage() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
            <div className="w-full mx-auto">
                <Card className="bg-white">
                    <CardContent className="p-6 items-stretch">
                        <form className="space-y-4 pl-10">
                            <div className="space-y-2">
                                <Label htmlFor="old-password">Old Password</Label>
                                <Input className="w-3/5" id="old-password" type="password" placeholder="Enter your current password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input className="w-3/5" id="new-password" type="password" placeholder="Enter new password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input className="w-3/5" id="confirm-password" type="password" placeholder="Enter new password again" />
                            </div>
                            <div className="flex space-x-4 pt-4">
                                <Button variant="outline" className="w-full text-[#5F3AFB] border-[#5F3AFB] bg-white">Cancel</Button>
                                <Button className="w-full bg-[#5F3AFB] hover:bg-[#5F3AFB] text-white">Change password</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}