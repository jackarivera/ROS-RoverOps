import rclpy
from rclpy.node import Node

class TopicLister(Node):
    def __init__(self):
        super().__init__('topic_lister')
        self.get_logger().info('Node is started')

    def list_active_topics(self):
        topic_names_and_types = self.get_topic_names_and_types(no_demangle=False)
        return topic_names_and_types

def main():
    rclpy.init()
    topic_lister = TopicLister()
    topics = topic_lister.list_active_topics()
    rclpy.shutdown()
    return topics

if __name__ == '__main__':
    print(main())