import {
  Blend,
  BookType,
  Component,
  Folder,
  Home,
  ImageIcon,
  LayoutDashboardIcon,
  LayoutTemplate,
  Minus,
  Palette,
  Settings,
  ShapesIcon,
  Sparkle,
  Square,
  SquareRoundCorner,
  Type,
} from "lucide-react";
import BackgroundSetting from "./Components/BackgroundSetting";
import AddImageSetting from "./Components/AddImageSetting";
import Elements from "./Components/Elements";
import FillColor from "./Sharable/FillColor";
import BorderColor from "./Sharable/BorderColor";
import BorderWidth from "./Sharable/BorderWidth";
import Opacity from "./Sharable/Opacity";
import BorderRadius from "./Sharable/BorderRadius";
import AiTransformSetting from "./Components/AiTransformSetting";
import TextSettings from "./Components/TextSettings";
import FontFamily from "./Sharable/FontFamily";
import TemplatesList from "./Components/TemplatesList";

export const WorkspaceMenu = [
  {
    name: "Home",
    icon: Home,
    path: "/workspace",
  },
  {
    name: "Projects",
    icon: Folder,
    path: "/workspace/projects",
  },
  {
    name: "Templates",
    icon: LayoutDashboardIcon,
    path: "/workspace/templates",
  },
];

export const canvasSizeOptions = [
  {
    name: "Instagram Post",
    width: 500,
    height: 500,
    icon: "/size/instagram.png",
  },
  {
    name: "Instagram Story",
    width: 473,
    height: 700,
    icon: "/size/instagram.png",
  },
  {
    name: "YouTube Thumbnail",
    width: 700,
    height: 394,
    icon: "/size/youtube.png",
  },
  {
    name: "YouTube Banner",
    width: 700,
    height: 394,
    icon: "/size/youtube.png",
  },
  {
    name: "Flyer (A4)",
    width: 508,
    height: 700,
    icon: "/size/flyer.png",
  },
  {
    name: "Facebook Post",
    width: 700,
    height: 368,
    icon: "/size/facebook.png",
  },
  {
    name: "Twitter Post",
    width: 700,
    height: 394,
    icon: "/size/twitter.png",
  },
  {
    name: "LinkedIn Post",
    width: 700,
    height: 366,
    icon: "/size/linkedin.png",
  },
  {
    name: "Pinterest Pin",
    width: 467,
    height: 700,
    icon: "/size/pinterest.png",
  },
];

export const sideBarMenu = [
  {
    name: "Templates",
    desc: "Select Prebuild Template",
    icon: LayoutTemplate,
    component: <TemplatesList />,
  },
  {
    name: "Elements",
    desc: "Select Shapes and Sticker",
    icon: ShapesIcon,
    component: <Elements />,
  },
  {
    name: "Images",
    desc: "Add Image or Upload your own",
    icon: ImageIcon,
    component: <AddImageSetting />,
  },
  {
    name: "Text",
    desc: "Add Text and Heading",
    icon: Type,
    component: <TextSettings />,
  },
  {
    name: "AI",
    desc: "More AI Feature to enhance your design",
    icon: Sparkle,
    component: <AiTransformSetting />,
  },
  {
    name: "Background",
    desc: "Change Canvas Background",
    icon: Component,
    component: <BackgroundSetting />,
  },
  {
    name: "Settings",
    desc: "Update Canvas Size and background",
    icon: Settings,
  },
];

export const ShapeList = [
  {
    name: "Circle",
    icon: "/shapes/circle.png",
  },
  {
    name: "Square",
    icon: "/shapes/square.png",
  },
  {
    name: "Triangle",
    icon: "/shapes/triangle.png",
  },
  {
    name: "Line",
    icon: "/shapes/line.png",
  },
];

export const shapesSettingsList = [
  {
    name: "Fill",
    icon: Palette,
    component: <FillColor />,
  },
  {
    name: "Stroke Color",
    icon: Square,
    component: <BorderColor />,
  },
  {
    name: "Stroke Width",
    icon: Minus,
    component: <BorderWidth />,
  },
  {
    name: "Opacity",
    icon: Blend,
    component: <Opacity />,
  },
  {
    name: "Rounded Corner",
    icon: SquareRoundCorner,
    component: <BorderRadius />,
  },
];

export const AITransformationSettings = [
  {
    name: "Background Remove",
    command: "e-bgremove",
    image: "/ai/remove-bg.png",
  },
  {
    name: "Change Background",
    command: "e-changebg-prompt-snow",
    image: "/ai/change-bg.jpg",
    input: true,
  },
  {
    name: "AI drop shadow",
    command: "e-shadow",
    image: "/ai/shadow.png",
  },
  {
    name: "Upscale",
    command: "e-upscale",
    image: "/ai/upscale.webp",
  },
  {
    name: "Smart crop",
    command: "fo-auto",
    image: "/ai/smartcrop.png",
  },
  {
    name: "Contrast",
    command: "e-contrast",
    image: "/ai/e-contrast.png",
  },
  {
    name: "Grayscale",
    command: "e-grayscale",
    image: "/ai/grayscale.jpg",
  },
  {
    name: "Blur",
    command: "e-blur",
    image: "/ai/e-blur.png",
  },
  {
    name: "Flip",
    command: "e-flip",
    image: "/ai/e-flip.png",
  },
];

export const TextSettingsList = [
  {
    name: "FIll",
    icon: Palette,
    component: <FillColor />,
  },
  {
    name: "Stroke Color",
    icon: Square,
    component: <BorderColor />,
  },
  {
    name: "Stroke Width",
    icon: Minus,
    component: <BorderWidth />,
  },
  {
    name: "Opacity",
    icon: Blend,
    component: <Opacity />,
  },
  {
    name: "Font",
    icon: BookType,
    component: <FontFamily />,
  },
];

export const FontFamilyList = [
  "Arial",
  "Arial Black",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Palatino",
  "Bookman",
  "Comic Sans MS",
  "Impact",
  "Lucida Sans Unicode",
  "Geneva",
  "Lucida Console",
];

export const StickerList = [
  "https://cdn-icons-png.flaticon.com/256/428/428094.png",
  "https://cdn-icons-png.flaticon.com/256/2111/2111694.png",
  "https://cdn-icons-png.flaticon.com/256/5968/5968764.png",
  "https://cdn-icons-png.flaticon.com/256/1384/1384060.png",
  "https://cdn-icons-png.flaticon.com/256/733/733585.png",
  "https://cdn-icons-png.flaticon.com/256/2111/2111646.png",
  "https://cdn-icons-png.flaticon.com/256/4494/4494477.png",
  "https://cdn-icons-png.flaticon.com/256/281/281764.png",
  "https://cdn-icons-png.flaticon.com/256/1409/1409941.png",
  "https://cdn-icons-png.flaticon.com/256/520/520406.png",
  "https://cdn-icons-png.flaticon.com/256/1791/1791313.png",
  "https://cdn-icons-png.flaticon.com/256/1791/1791312.png",
  "https://cdn-icons-png.flaticon.com/256/919/919830.png",
  "https://cdn-icons-png.flaticon.com/256/2996/2996822.png",
  "https://cdn-icons-png.flaticon.com/256/7966/7966996.png",
  "https://cdn-icons-png.flaticon.com/256/8760/8760788.png",
  "https://cdn-icons-png.flaticon.com/256/5171/5171530.png",
  "https://cdn-icons-png.flaticon.com/256/7096/7096435.png",
  "https://cdn-icons-png.flaticon.com/256/346/346167.png",
  "https://cdn-icons-png.flaticon.com/256/1776/1776968.png",
  "https://cdn-icons-png.flaticon.com/256/1497/1497177.png",
  "https://cdn-icons-png.flaticon.com/256/2517/2517029.png",
  "https://cdn-icons-png.flaticon.com/256/2276/2276906.png",
  "https://cdn-icons-png.flaticon.com/256/6604/6604292.png",
  "https://cdn-icons-png.flaticon.com/256/6010/6010131.png",
  "https://cdn-icons-png.flaticon.com/256/11167/11167978.png",
  "https://cdn-icons-png.flaticon.com/256/11145/11145432.png",
  "https://cdn-icons-png.flaticon.com/256/7645/7645528.png",
  "https://cdn-icons-png.flaticon.com/256/16116/16116383.png",
  "https://cdn-icons-png.flaticon.com/256/639/639373.png",
];
