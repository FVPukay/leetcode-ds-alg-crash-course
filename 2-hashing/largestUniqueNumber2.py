class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        # Time: O(N)
        # Space: O(N)
        freq = Counter(nums);
        return max(
            (num for num, count in freq.items() if count == 1)
            , default=-1
        )
    