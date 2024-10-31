def stock_picker(stock)
  result = {}
  i = 0;
  while i < stock.length
    j = i + 1
    while j < stock.length
      result["#{i}#{j}"] = stock[j] - stock[i]
      j += 1
    end
    i += 1
  end
  puts result.max_by { |key, value| value}.first.split("")
end 

stock_picker([17,3,6,9,15,8,6,1,10])
