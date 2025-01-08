class sum {

    public int add(int a, int b) {
        return a + b;
    }
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    public double add(double a, double b) {
        return a + b;
    }
    public int add(String a, String b) {
        return Integer.parseInt(a) + Integer.parseInt(b);
    }

    public static void main(String[] args) {
        Parameter x = new Parameter();

        System.out.println(x.add(1, 2));
        System.out.println(x.add(4, 9, 3));
        System.out.println(x.add(1.9, 2.2));
        System.out.println(x.add("3", "7"));
    }
}
