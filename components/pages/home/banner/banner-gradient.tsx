"use client";

// Imports
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

// Styles
import styles from "@/styles/pages/home.module.scss";

export default function BannerGradient() {

    return (

        <div className={styles.bannerGradient}>

            <ShaderGradientCanvas
                style={{ position: 'absolute', inset: 0 }}
                fov={25}
            >
                <ShaderGradient
                    control='query'
                    urlString='https://shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3&cPolarAngle=115&cameraZoom=1&color1=%234256FF&color2=%23FF6BD4&color3=%230d1117&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=3.8&uFrequency=5.5&uSpeed=0.1&uStrength=0.8&uTime=0.2&wireframe=false'
                />
            </ShaderGradientCanvas>

        </div>

    )
}