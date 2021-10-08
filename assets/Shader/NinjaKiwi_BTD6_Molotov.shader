//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "NinjaKiwi/BTD6/Molotov" {
Properties {
_Cutoff ("Mask Clip Value", Float) = 0.5
[Toggle(_2NDMASKON_ON)] _2ndMaskOn ("2ndMaskOn", Float) = 0
_FireNoise ("FireNoise", 2D) = "white" { }
_Mask ("Mask", 2D) = "white" { }
_2ndMask ("2ndMask", 2D) = "white" { }
_FlameSpeed ("FlameSpeed", Range(-1, 0)) = 0
_2ndMaskSpeed ("2ndMaskSpeed", Range(-5, 0)) = 0
_OverlyPow ("OverallPow", Float) = 2
_MaskPow ("MaskPow", Float) = 2
_2ndMaskPow ("2ndMaskPow", Float) = 2
_NoisePow ("NoiseMaskPow", Float) = 1
_muY ("Mask02muY", Float) = 1
_OuterClip ("OuterClip", Range(0, 1)) = 0.06
_MiddleClip ("MiddleClip", Range(0, 1)) = 0.34
_InnerClip ("InnerClip", Range(0, 1)) = 0.5
_NoiseFlame ("NoiseFlame", Color) = (0.8396226,0.6610465,0.01980242,0)
_BaseFlame ("BaseFlame", Color) = (0.9339623,0.2580341,0.09251513,0)
_BaseFlameIntensity ("BaseFlameIntensity", Range(0, 2)) = 1
_InnerFlame ("InnerFlame", Color) = (1,1,1,0)
_InnerFlameIntensity ("InnerFlameIntensity", Range(0, 2)) = 1
}
SubShader {
 LOD 100
 Tags { "IGNOREPROJECTOR" = "true" "QUEUE" = "AlphaTest+0" "RenderType" = "TransparentCutout" }
 Pass {
  LOD 100
  Tags { "IGNOREPROJECTOR" = "true" "QUEUE" = "AlphaTest+0" "RenderType" = "TransparentCutout" }
  Cull Off
  GpuProgramID 46440
Program "vp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Local Keywords { "_2NDMASKON_ON" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Local Keywords { "_2NDMASKON_ON" }
"// shader disassembly not supported on DXBC"
}
}
}
}
}