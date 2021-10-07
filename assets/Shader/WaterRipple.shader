//////////////////////////////////////////
//
// NOTE: This is *not* a valid shader file
//
///////////////////////////////////////////
Shader "WaterRipple" {
Properties {
_RippleTexture ("RippleTexture", 2D) = "white" { }
_Cutoff ("Mask Clip Value", Float) = 0.5
_RippleColor ("RippleColor", Color) = (0,0,0,0)
_RippleSpeed ("RippleSpeed", Float) = 0
_RippleWidth ("RippleWidth", Range(0, 1)) = 0
_cliping ("cliping", Range(0, 8)) = 0
_texcoord ("", 2D) = "white" { }
_texcoord2 ("", 2D) = "white" { }
_Tint ("Tint", Color) = (1,1,1,0)
}
SubShader {
 Tags { "IGNOREPROJECTOR" = "true" "IsEmissive" = "true" "QUEUE" = "AlphaTest+0" "RenderType" = "TransparentCutout" }
 Pass {
  Name "FORWARD"
  Tags { "IGNOREPROJECTOR" = "true" "IsEmissive" = "true" "LIGHTMODE" = "FORWARDBASE" "QUEUE" = "AlphaTest+0" "RenderType" = "TransparentCutout" }
  Cull Off
  GpuProgramID 40902
Program "vp" {
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "LIGHTPROBE_SH" }
"// shader disassembly not supported on DXBC"
}
}
Program "fp" {
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" }
"// shader disassembly not supported on DXBC"
}
SubProgram "d3d11 " {
Keywords { "DIRECTIONAL" "LIGHTPROBE_SH" }
"// shader disassembly not supported on DXBC"
}
}
}
}
}