class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> curr = new ArrayList<>();
        generateSubsets(nums, 0, curr, result);
        return result;
    }
    
    private void generateSubsets(int[] nums, int index, List<Integer> curr, List<List<Integer>> result) {
        
        result.add(new ArrayList<>(curr));
        
        // Try including each remaining number
        for (int i = index; i < nums.length; i++) {
            curr.add(nums[i]);
            generateSubsets(nums, i + 1, curr, result);
            curr.remove(curr.size() - 1);
        }
    }
}
