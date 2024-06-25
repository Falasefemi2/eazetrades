"use client";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="px-4 md:py-[35px] md:px-[50px] w-full h-full mx-auto">{children}</div>
    )
}

export default Container