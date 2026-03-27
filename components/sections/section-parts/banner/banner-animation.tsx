"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import styles from "@/styles/components/sections/gradient-banner.module.scss";

const shaderGradientProps = {
    control: "props" as const,
    animate: "on" as const,
    axesHelper: "off",
    bgColor1: "#000000",
    bgColor2: "#000000",
    brightness: 1.05,
    cAzimuthAngle: 180,
    cDistance: 3,
    cPolarAngle: 115,
    cameraZoom: 1,
    color1: "#4256FF",
    color2: "#FF6BD4",
    color3: "#0d1117",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city" as const,
    format: "gif",
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on" as const,
    lightType: "3d" as const,
    pixelDensity: 1,
    positionX: -0.5,
    positionY: 0.1,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 235,
    shader: "defaults",
    type: "waterPlane" as const,
    uAmplitude: 0,
    uDensity: 3.8,
    uFrequency: 5.5,
    uSpeed: 0.1,
    uStrength: 0.8,
    uTime: 0.2,
    wireframe: false
};

export default function BannerAnimation() {

    return (

        <div className={styles.bannerAnimation}>

            <ShaderGradientCanvas style={{ position: "absolute", inset: 0 }} fov={25} >

                <ShaderGradient {...shaderGradientProps} />

            </ShaderGradientCanvas>

        </div>

    );

}