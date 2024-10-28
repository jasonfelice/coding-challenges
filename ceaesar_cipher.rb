def ceasar_cipher(string, factor)
  result = ""
  string.chars.each do |char|
    # Check for lowercase
    if (char.match?(/[a-z]/))
      # Wrap letter
      result << ((((char.ord + factor) - 97) % 26) + 97).chr
    
    # Check for uppercase
    elsif (char.match?(/[A-Z]/))
      Wrap letter
      result << ((((char.ord + factor) - 65) % 26) + 65).chr
    # Append everything except letters
    else  
      result << char
    end
  end
  puts result
end

ceasar_cipher('Here is my cipher', 4)