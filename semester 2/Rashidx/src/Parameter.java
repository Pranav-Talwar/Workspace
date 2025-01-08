import static java.lang.System.out; // Allows direct use of System.out
public class Parameter{
    public static void main(String[] args) {
        var x = new Parameter();

        out.println(x.add(1, 2));
        out.println(x.add(4, 9, 3));
        out.println(x.add(1.9, 2.2));
        out.println(x.add("3", "7"));
    }
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

}
