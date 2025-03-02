class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        
        Time: O(N)
        Space: O(1)
        """
        left_idx = 0
        right_idx = len(s) - 1
        
        while left_idx < right_idx:
            left = s[left_idx]
            right = s[right_idx]
            temp = left
            
            left = right
            right = temp
            
            s[left_idx] = left
            s[right_idx] = right
            
            left_idx += 1
            right_idx -= 1
            
        return s
        