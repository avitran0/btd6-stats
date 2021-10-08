//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Explosion" {
Properties {
_TintColor ("Tint Color", Color) = (0.5,0.5,0.5,0.5)
_MainTex ("Particle Texture", 2D) = "white" { }
_InvFade ("Soft Particles Factor", Range(0.01, 3)) = 1
_SmokeBlack ("SmokeBlack", Color) = (0.1415094,0.1415094,0.1415094,0)
_SmokeGrey ("SmokeGrey", Color) = (0.3113208,0.3113208,0.3113208,0)
_SmokeWhite ("SmokeWhite", Color) = (0.4528302,0.4528302,0.4528302,0)
_StepBlackGrey ("StepBlackGrey", Range(0, 1)) = 0.42
_StepGreyWhite ("StepGreyWhite", Range(0, 1)) = 0.97
_ErosionMax ("ErosionMax", Range(0, 1)) = 0
_Fire02Color ("Fire02Color", Color) = (1,0.2643778,0,0)
_Fire02Intensity ("Fire02Intensity", Float) = 5
_Fire01Color ("Fire01Color", Color) = (1,0.2643778,0,0)
_Fire01Intensity ("Fire01Intensity", Float) = 5
_TextureSample0 ("Texture Sample 0", 2D) = "white" { }
_texcoord ("", 2D) = "white" { }
}
SubShader {
 Tags { "IGNOREPROJECTOR" = "true" "PreviewType" = "Plane" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
 Pass {
  Tags { "IGNOREPROJECTOR" = "true" "PreviewType" = "Plane" "QUEUE" = "Transparent" "RenderType" = "Transparent" }
  Blend SrcAlpha OneMinusSrcAlpha, SrcAlpha OneMinusSrcAlpha
  ColorMask RGB 0
  ZWrite Off
  Cull Off
  GpuProgramID 61497
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "SOFTPARTICLES_ON" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "SOFTPARTICLES_ON" }
"// shader disassembly not supported on DXBC"
}
}
}
}
CustomEditor "ASEMaterialInspector"
}