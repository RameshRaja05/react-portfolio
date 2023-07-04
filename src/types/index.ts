export type terminal={
    text:React.ReactNode;
}

export type emojiBullet={
    emoji:string;
    text:string
}

export type toggler={
    darkMode:boolean;
    handleClick:()=>void;
}

export type socialIcon={
    link:string;
    icon:string;
    label:string
}

export type iconLink={
    link:string;
    title:string;
    icon:string
}

export type portfolioBlock={
    image:any;
    live:string|undefined;
    source:string;
    title:string
}

export type navbar=toggler