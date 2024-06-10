"use client";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="py-[35px] px-[72px] w-full h-full mx-auto">{children}</div>
    )
}

export default Container