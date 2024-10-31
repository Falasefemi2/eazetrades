import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ImageIcon, SendIcon, SmileIcon, Star } from "lucide-react"

export default function MessagesPage() {
    return (
        <div className="flex h-[600px] w-full max-w-3xl border rounded-lg overflow-hidden">
            {/* Chat List */}
            <div className="w-80 border-r bg-background hidden md:block">
                <div className="p-4 border-b">
                    <h2 className="font-semibold">Messages</h2>
                </div>
                <ScrollArea className="h-[calc(600px-57px)]">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-4 hover:bg-accent cursor-pointer border-b"
                        >
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium text-sm">User Name</h3>
                                    <span className="text-xs text-muted-foreground">12:34</span>
                                </div>
                                <p className="text-xs text-muted-foreground truncate">
                                    Last message preview...
                                </p>
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="px-4 py-3 border-b flex items-center justify-between bg-background">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h3 className="text-sm font-medium leading-none">Name of seller</h3>
                            <p className="text-xs text-muted-foreground mt-1">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Star className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <span className="sr-only">More options</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                                <circle cx="5" cy="12" r="1" />
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                                <p className="text-sm">
                                    Hi Shammah, I want to buy the purple speaker that I saw on your website profile but I have a couple of questions:
                                </p>
                                <p className="text-sm mt-2">
                                    1. How long has the speaker been, the life span and all???
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                                <p className="text-sm">
                                    Hi Shammah, I want to buy the purple speaker that I saw on your website profile but I have a couple of questions:
                                </p>
                                <p className="text-sm mt-2">
                                    1. How long has the speaker been, the life span and all???
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t bg-background">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <SmileIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <ImageIcon className="h-5 w-5" />
                        </Button>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button size="icon">
                            <SendIcon className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}