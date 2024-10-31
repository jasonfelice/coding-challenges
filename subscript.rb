dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
def substrings (string, list)
  result = {}
  string = string.downcase.split(" ")
  string.each do |word|
    list.each do |dic|
      if word.include?(dic) && !result[:"#{dic}"]
        result[:"#{dic}"] = 1
      
      elsif word.include?(dic) && !!result[:"#{dic}"]
        result[:"#{dic}"] += 1
      end
    end
  end
  puts result
end
  
  
substrings("Howdy partner, sit down! How's it going?", dictionary)        
