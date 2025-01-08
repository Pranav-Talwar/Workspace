import static java.lang.System.out;
import java.util.Scanner;

public class vowel {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        out.print("Enter a string: ");
        String input = sc.nextLine();

        int b = count(input);
        out.println("Number of vowels: " + b);

    }
    public static int count(String input) {
        int y = 0;
        String vowels = "aeiou";
        input = input.toLowerCase();

        for (int i = 0; i < input.length(); i++) {
            char z = input.charAt(i);
            if (vowels.indexOf(z) != -1) y++;
        }
        return y;
    }

}
