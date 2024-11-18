"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Smile, Image, Send, MoreVertical, Star, Menu } from 'lucide-react'

interface Message {
    id: number
    content: string
    sender: string
    timestamp: string
    isMe: boolean
}

interface Chat {
    id: number
    name: string
    avatar: string
    lastMessage: string
    timestamp: string
    online?: boolean
}

const chats: Chat[] = [
    {
        id: 1,
        name: "GAPD DesPro",
        avatar: "/placeholder.svg",
        lastMessage: "Tosin Okowowo",
        timestamp: "17:36",
        online: true
    },
    {
        id: 2,
        name: "Generator Man",
        avatar: "/placeholder.svg",
        lastMessage: "Boss, d gen don spoil o!!!",
        timestamp: "17:36"
    },
    {
        id: 3,
        name: "Love of your life",
        avatar: "/placeholder.svg",
        lastMessage: "Don't worry, breakfast is...",
        timestamp: "17:36"
    },
    // Add more chats as needed
]

const messages: Message[] = [
    {
        id: 1,
        content: "Hi Shammah. I want to buy the purple speaker that I saw on your website profile but I have a couple of questions:",
        sender: "User",
        timestamp: "17:36",
        isMe: true
    },
    {
        id: 2,
        content: "1. How long has the speaker been, the life span and all???",
        sender: "User",
        timestamp: "17:36",
        isMe: true
    }
]

export default function Component() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [newMessage, setNewMessage] = useState("")

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <div className={cn(
                "border-r bg-background w-80 flex-shrink-0 transition-all duration-300",
                sidebarOpen ? "translate-x-0" : "-translate-x-full",
                "fixed md:relative h-full z-20"
            )}>
                <ScrollArea className="h-screen">
                    <div className="p-4 space-y-4">
                        {chats.map((chat) => (
                            <div
                                key={chat.id}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer"
                            >
                                <div className="relative">
                                    <Avatar>
                                        <AvatarImage src={chat.avatar} alt={chat.name} />
                                        <AvatarFallback>{chat.name[0]}</AvatarFallback>
                                    </Avatar>
                                    {chat.online && (
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium truncate">{chat.name}</p>
                                        <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-full">
                {/* Chat Header */}
                <div className="border-b p-4 flex items-center justify-between bg-background">
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg" alt="Name of seller" />
                            <AvatarFallback>NS</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-semibold">Name of seller</h2>
                            <p className="text-sm text-muted-foreground">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Star className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={cn(
                                    "flex",
                                    message.isMe ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[80%] rounded-lg px-4 py-2",
                                        message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                                    )}
                                >
                                    <p>{message.content}</p>
                                    <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="border-t p-4 bg-background">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Smile className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Image className="h-5 w-5" />
                        </Button>
                        <Input
                            placeholder="Type a message"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="flex-1"
                        />
                        <Button size="icon">
                            <Send className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}