import org.w3c.dom.Node;

public class RedBlackTree <V extends Comparable<V>> {

 private Node root;

 private enum ColorNode {
 RED, BLACK
        }
 class Node {
 Node left, right;
 V data;
 ColorNode color;

 Node(V data) {
 this.data = data;
 left = null;
 right = null;
 color = ColorNode.RED;
            }

 @Override
 public String toString() {
 return "Node{" +
 " data=" + data +
 ", color=" + color +
 ",left=" + left +
 ", right=" + right +
                        '}';
            }
        }

 private Node rotateLeft (Node myNode){
 Node child = myNode.right;
 Node childLeft = child.left;
 child.left = myNode;
 myNode.right = childLeft;
 return child;
    }

 private Node rotateRight (Node myNode){
 Node child = myNode.left;
 Node childRight = child.right;
 child.right = myNode;
 myNode.left = childRight;
 return child;
    }

 private boolean isRed (Node myNode){
 return myNode != null && myNode.color.equals(ColorNode.RED);
    }

 private void swapColors (Node node1, Node node2){
 ColorNode temp = node1.color;
 node1.color = node2.color;
 node2.color = temp;
    }

 public boolean insert (V data){
 Node node;
 if (root != null) {
 node = insert(root, data);
 if (node == null) {
 return false;
            }
 } else {
 node = new Node(data);
        }
 root = node;
 root.color = ColorNode.BLACK;
 return true;
    }

 private Node insert (Node myNode, V data){
        if (myNode == null) {
            return new Node(data);
        }
        if (myNode.data.compareTo(data) > 0) {
            myNode.left = insert(myNode.left, data);
        } else if (myNode.data.compareTo(data) < 0) {
            myNode.right = insert(myNode.right, data);
        } else
            return null;
        return balanced(myNode);
    }

        private Node balanced (Node myNode){
        if (isRed(myNode.right) && !isRed(myNode.left)) {
            myNode = rotateLeft(myNode);
            swapColors(myNode, myNode.left);
        }

        if (isRed(myNode.left) && isRed(myNode.left.left)) {
            myNode = rotateRight(myNode);
            swapColors(myNode, myNode.right);
        }

        if (isRed(myNode.left) && isRed(myNode.right)) {
            myNode.color = ColorNode.RED;
            myNode.left.color = ColorNode.BLACK;
            myNode.right.color = ColorNode.BLACK;
        }
        return myNode;
    }

        public void inorder () {
        inorder(root);
    }

        private void inorder (Node node){
        if (node != null) {
            inorder(node.left);
            System.out.print(node.data + " " + node.color + "|");
            inorder(node.right);
        }
    }
}
