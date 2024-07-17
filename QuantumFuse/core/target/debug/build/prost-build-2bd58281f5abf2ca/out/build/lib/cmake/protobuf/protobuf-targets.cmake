# Generated by CMake

if("${CMAKE_MAJOR_VERSION}.${CMAKE_MINOR_VERSION}" LESS 2.8)
   message(FATAL_ERROR "CMake >= 2.8.0 required")
endif()
if(CMAKE_VERSION VERSION_LESS "2.8.3")
   message(FATAL_ERROR "CMake >= 2.8.3 required")
endif()
cmake_policy(PUSH)
cmake_policy(VERSION 2.8.3...3.27)
#----------------------------------------------------------------
# Generated CMake target import file.
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Protect against multiple inclusion, which would fail when already imported targets are added once more.
set(_cmake_targets_defined "")
set(_cmake_targets_not_defined "")
set(_cmake_expected_targets "")
foreach(_cmake_expected_target IN ITEMS protobuf::libprotobuf-lite protobuf::libprotobuf protobuf::libprotoc protobuf::protoc)
  list(APPEND _cmake_expected_targets "${_cmake_expected_target}")
  if(TARGET "${_cmake_expected_target}")
    list(APPEND _cmake_targets_defined "${_cmake_expected_target}")
  else()
    list(APPEND _cmake_targets_not_defined "${_cmake_expected_target}")
  endif()
endforeach()
unset(_cmake_expected_target)
if(_cmake_targets_defined STREQUAL _cmake_expected_targets)
  unset(_cmake_targets_defined)
  unset(_cmake_targets_not_defined)
  unset(_cmake_expected_targets)
  unset(CMAKE_IMPORT_FILE_VERSION)
  cmake_policy(POP)
  return()
endif()
if(NOT _cmake_targets_defined STREQUAL "")
  string(REPLACE ";" ", " _cmake_targets_defined_text "${_cmake_targets_defined}")
  string(REPLACE ";" ", " _cmake_targets_not_defined_text "${_cmake_targets_not_defined}")
  message(FATAL_ERROR "Some (but not all) targets in this export set were already defined.\nTargets Defined: ${_cmake_targets_defined_text}\nTargets not yet defined: ${_cmake_targets_not_defined_text}\n")
endif()
unset(_cmake_targets_defined)
unset(_cmake_targets_not_defined)
unset(_cmake_expected_targets)


# Create imported target protobuf::libprotobuf-lite
add_library(protobuf::libprotobuf-lite STATIC IMPORTED)

set_target_properties(protobuf::libprotobuf-lite PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "/home/runner/QuantumFuseBlockchain-2/.cargo/registry/src/index.crates.io-6f17d22bba15001f/prost-build-0.10.4/third-party/protobuf/src"
)

# Create imported target protobuf::libprotobuf
add_library(protobuf::libprotobuf STATIC IMPORTED)

set_target_properties(protobuf::libprotobuf PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "/home/runner/QuantumFuseBlockchain-2/.cargo/registry/src/index.crates.io-6f17d22bba15001f/prost-build-0.10.4/third-party/protobuf/src"
  INTERFACE_LINK_LIBRARIES "ZLIB::ZLIB"
)

# Create imported target protobuf::libprotoc
add_library(protobuf::libprotoc STATIC IMPORTED)

set_target_properties(protobuf::libprotoc PROPERTIES
  INTERFACE_INCLUDE_DIRECTORIES "/home/runner/QuantumFuseBlockchain-2/.cargo/registry/src/index.crates.io-6f17d22bba15001f/prost-build-0.10.4/third-party/protobuf/src"
  INTERFACE_LINK_LIBRARIES "protobuf::libprotobuf"
)

# Create imported target protobuf::protoc
add_executable(protobuf::protoc IMPORTED)

# Import target "protobuf::libprotobuf-lite" for configuration "Debug"
set_property(TARGET protobuf::libprotobuf-lite APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(protobuf::libprotobuf-lite PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "/home/runner/QuantumFuseBlockchain-2/QuantumFuse/core/target/debug/build/prost-build-2bd58281f5abf2ca/out/build/libprotobuf-lited.a"
  )

# Import target "protobuf::libprotobuf" for configuration "Debug"
set_property(TARGET protobuf::libprotobuf APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(protobuf::libprotobuf PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "/home/runner/QuantumFuseBlockchain-2/QuantumFuse/core/target/debug/build/prost-build-2bd58281f5abf2ca/out/build/libprotobufd.a"
  )

# Import target "protobuf::libprotoc" for configuration "Debug"
set_property(TARGET protobuf::libprotoc APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(protobuf::libprotoc PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "/home/runner/QuantumFuseBlockchain-2/QuantumFuse/core/target/debug/build/prost-build-2bd58281f5abf2ca/out/build/libprotocd.a"
  )

# Import target "protobuf::protoc" for configuration "Debug"
set_property(TARGET protobuf::protoc APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(protobuf::protoc PROPERTIES
  IMPORTED_LOCATION_DEBUG "/home/runner/QuantumFuseBlockchain-2/QuantumFuse/core/target/debug/build/prost-build-2bd58281f5abf2ca/out/build/protoc-3.19.4.0"
  )

# This file does not depend on other imported targets which have
# been exported from the same project but in a separate export set.

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
cmake_policy(POP)
