import java.util.Scanner;
public class EvenOdd {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = input.nextInt();
        evenOdd(n);
    }

    public static void evenOdd(int n) {
        String type = (n % 2 == 0) ? "even" : "odd"; //If else in short form
        System.out.println("The number " + n + " is " + type);

        if (n % 2 == 0) square(n);
        else cube(n);
        factorial(n);
    }

    public static void square(int n) {
        int sq = n * n;
        System.out.println(n + "^2 = " + sq);
    }

    public static void cube(int n) {
        int cu = n * n * n;
        System.out.println(n + "^3 = " + cu);
    }
    public static void factorial(int n) {
        long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        System.out.println(n + "! = " + fact);
    }
}
