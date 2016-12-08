//STL packages
#if defined(imagenowDir6)
  // 6.7.0.2717+, including Active-Active support
  #include "$IMAGENOWDIR6$/script/STL/packages/Object/toJSON.js"
#else
  // pre-6.7.0.2717, no Active-Active support
  #include "../script/STL/packages/Object/toJSON.js"
#endif

toJSON({});