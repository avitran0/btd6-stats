//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "Unlit/DroneLight" {
Properties {
_BaseTex ("BaseTex", 2D) = "white" { }
_FlashSpeed ("FlashSpeed", Range(0, 10)) = 0
_FlashOnOff ("FlashOnOff", Range(0, 1)) = 0
_ColorTint ("LightColor", Color) = (0.1,0.1,0.1,1)
}
SubShader {
 LOD 100
 Tags { "RenderType" = "Opaque" }
 Pass {
  LOD 100
  Tags { "RenderType" = "Opaque" }
  GpuProgramID 4144
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
}
}
}
}