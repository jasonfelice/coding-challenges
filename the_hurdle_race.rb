def hurdleRace(k, height)
   if (height.max() <= k)
    return  0
   else 
    height.max() - k
   end
end