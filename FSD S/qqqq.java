import java.util.*;

class Result {

    public static List<Long> minMax(List<String> operations, List<Integer> x) {

        TreeMap<Integer, Integer> map = new TreeMap<>();
        List<Long> result = new ArrayList<>();

        int idx = 0;

        for (String op : operations) {

            if (op.equals("push")) {
                int val = x.get(idx++);
                map.put(val, map.getOrDefault(val, 0) + 1);
            } else { // pop

                if (!map.isEmpty()) {
                    int min = map.firstKey();
                    int freq = map.get(min);

                    if (freq == 1) {
                        map.remove(min);
                    } else {
                        map.put(min, freq - 1);
                    }
                }
            }

            // 🔥 CRITICAL FIX
            if (!map.isEmpty()) {
                int min = map.firstKey();
                int max = map.lastKey();
                result.add((long) min * max);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        List<String> ops = Arrays.asList("push", "pop", "push");
        List<Integer> x = Arrays.asList(5, 3);
        List<Long> result = minMax(ops, x);
        System.out.println("Result: " + result);
    }
}
