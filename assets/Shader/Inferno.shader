//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "Inferno" {
Properties {
_Cutoff ("Mask Clip Value", Float) = 0.5
_T1XY ("T1XY", Vector) = (1,1,0,0)
_T2XY ("T2XY", Vector) = (1,1,0,0)
_T1SpdXY ("T1SpdXY", Vector) = (0.5,0.2,0,0)
_Noise ("Noise", 2D) = "white" { }
_T2SpdXY ("T2SpdXY", Vector) = (0.3,0.4,0,0)
_Min ("Min", Range(0, 1)) = 0
_Max ("Max", Range(0, 1)) = 0
_2ndColorBrightness ("2ndColorBrightness", Range(0, 10)) = 1
_2ndColor ("2ndColor", Color) = (1,0.920817,0,0)
_OverAllBrightness ("OverAllBrightness", Float) = 1
_AlphaErosion ("AlphaErosion", Float) = 1
_SphereClip ("SphereClip", Float) = 1
_Color0 ("Color 0", Color) = (1,0,0,0)
}
SubShader {
 Tags { "IGNOREPROJECTOR" = "true" "QUEUE" = "AlphaTest+0" "RenderType" = "TransparentCutout" }
 Pass {
  Tags { "IGNOREPROJECTOR" = "true" "QUEUE" = "AlphaTest+0" "RenderType" = "TransparentCutout" }
  Cull Off
  GpuProgramID 14472
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