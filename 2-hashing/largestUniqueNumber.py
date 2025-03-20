class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        # Time: O(N)
        # Space: O(N)
        freq = {};
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        ans = -1
        for num, count in freq.items():
            if count == 1:
                ans = max(num, ans)
        return ans
    