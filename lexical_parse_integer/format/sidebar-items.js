window.SIDEBAR_ITEMS = {"constant":[["BASE_PREFIX","Mask to extract the base prefix character."],["BASE_PREFIX_SHIFT","Shift to convert to and from a base prefix as a `u8`."],["BASE_SUFFIX","Mask to extract the base suffix character."],["BASE_SUFFIX_SHIFT","Shift to convert to and from a base suffix as a `u8`."],["CASE_SENSITIVE_BASE_PREFIX","Base prefixes are case-sensitive."],["CASE_SENSITIVE_BASE_SUFFIX","Base suffixes are case-sensitive."],["CASE_SENSITIVE_EXPONENT","Exponent characters are case-sensitive."],["CASE_SENSITIVE_SPECIAL","Special (non-finite) values are case-sensitive."],["CONSECUTIVE_DIGIT_SEPARATOR","Multiple consecutive digit separators are allowed."],["DIGIT_SEPARATOR","Mask to extract the digit separator character."],["DIGIT_SEPARATOR_SHIFT","Shift to convert to and from a digit separator as a `u8`."],["EXPONENT_BASE","Mask to extract the exponent base: the base the exponent is raised to."],["EXPONENT_BASE_SHIFT","Shift to convert to and from an exponent base as a `u32`."],["EXPONENT_CONSECUTIVE_DIGIT_SEPARATOR","Multiple consecutive exponent digit separators are allowed."],["EXPONENT_INTERNAL_DIGIT_SEPARATOR","Digit separators are allowed between exponent digits."],["EXPONENT_LEADING_DIGIT_SEPARATOR","A digit separator is allowed before any exponent digits."],["EXPONENT_RADIX","Mask to extract the exponent radix: the radix for the exponent digits."],["EXPONENT_RADIX_SHIFT","Shift to convert to and from an exponent radix as a `u32`."],["EXPONENT_TRAILING_DIGIT_SEPARATOR","A digit separator is allowed after any exponent digits."],["FRACTION_CONSECUTIVE_DIGIT_SEPARATOR","Multiple consecutive fraction digit separators are allowed."],["FRACTION_INTERNAL_DIGIT_SEPARATOR","Digit separators are allowed between fraction digits."],["FRACTION_LEADING_DIGIT_SEPARATOR","A digit separator is allowed before any fraction digits."],["FRACTION_TRAILING_DIGIT_SEPARATOR","A digit separator is allowed after any fraction digits."],["INTEGER_CONSECUTIVE_DIGIT_SEPARATOR","Multiple consecutive integer digit separators are allowed."],["INTEGER_INTERNAL_DIGIT_SEPARATOR","Digit separators are allowed between integer digits."],["INTEGER_LEADING_DIGIT_SEPARATOR","A digit separator is allowed before any integer digits."],["INTEGER_TRAILING_DIGIT_SEPARATOR","A digit separator is allowed after any integer digits."],["INTERNAL_DIGIT_SEPARATOR","Digit separators are allowed between digits."],["LEADING_DIGIT_SEPARATOR","A digit separator is allowed before any digits."],["MANTISSA_RADIX","Mask to extract the mantissa radix: the radix for the significant digits."],["MANTISSA_RADIX_SHIFT","Shift to convert to and from a mantissa radix as a `u32`."],["NO_EXPONENT_NOTATION","Exponent notation is not allowed."],["NO_EXPONENT_WITHOUT_FRACTION","Exponent without a fraction component is not allowed."],["NO_FLOAT_LEADING_ZEROS","Leading zeros before a float value are not allowed."],["NO_INTEGER_LEADING_ZEROS","Leading zeros before an integer value are not allowed."],["NO_POSITIVE_EXPONENT_SIGN","Positive sign before the exponent is not allowed."],["NO_POSITIVE_MANTISSA_SIGN","Positive sign before the mantissa is not allowed."],["NO_SPECIAL","Special (non-finite) values are not allowed."],["RADIX","Alias for MANTISSA_RADIX."],["RADIX_SHIFT","Alias for MANTISSA_RADIX_SHIFT."],["REQUIRED_DIGITS","At least 1 digit in the number is required."],["REQUIRED_EXPONENT_DIGITS","Digits are required after the exponent character. This check will only occur if the exponent character is present."],["REQUIRED_EXPONENT_NOTATION","Exponent notation is required."],["REQUIRED_EXPONENT_SIGN","Positive sign before the exponent is required."],["REQUIRED_FRACTION_DIGITS","Digits are required after the decimal point. This check will only occur if the decimal point is present."],["REQUIRED_INTEGER_DIGITS","Digits are required before the decimal point."],["REQUIRED_MANTISSA_DIGITS","Mantissa digits are required (either before or after the decimal point)."],["REQUIRED_MANTISSA_SIGN","Positive sign before the mantissa is required."],["SPECIAL_DIGIT_SEPARATOR","Any digit separators are allowed in special (non-finite) values."],["STANDARD","Standard number format. This is identical to the Rust string format."],["TRAILING_DIGIT_SEPARATOR","A digit separator is allowed after any digits."]],"fn":[["base_prefix","Extract the base prefix character from the format packed struct."],["base_suffix","Extract the base suffix character from the format packed struct."],["digit_separator","Extract the digit separator from the format packed struct."],["exponent_base","Extract the exponent base from the format packed struct. If not provided, defaults to `mantissa_radix`."],["exponent_radix","Extract the exponent radix from the format packed struct. If not provided, defaults to `mantissa_radix`."],["format_error","Get the error type from the format packed struct."],["format_is_valid","Determine if the format packed struct is valid."],["is_valid_base_prefix","Determine if the base prefix character is valid."],["is_valid_base_suffix","Determine if the base suffix character is valid."],["is_valid_digit_separator","Determine if the digit separator is valid. Digit separators must not be valid digits or sign characters."],["is_valid_exponent_flags","Determine if the provided exponent flags are valid."],["is_valid_options_punctuation","Determine if all of the “punctuation” characters for the options API are valid."],["is_valid_punctuation","Determine if all of the “punctuation” characters are valid."],["is_valid_radix","Determine if the radix is valid."],["mantissa_radix","Extract the mantissa radix from the format packed struct."],["radix_from_flags","Extract a generic radix from the format and bitflags."]],"struct":[["NumberFormatBuilder","Build number format from specifications."]],"type":[["OptionU8","Type with the exact same size as a `u8`."]]};