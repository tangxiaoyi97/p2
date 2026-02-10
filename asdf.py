import os

def rename_files_and_folders(root_path):
    # 检查路径是否存在
    if not os.path.exists(root_path):
        print("错误：指定的路径不存在，请检查输入。")
        return

    # os.walk(topdown=False) 确保先处理子文件夹/文件，再处理父文件夹
    for root, dirs, files in os.walk(root_path, topdown=False):
        # 合并当前目录下所有的文件夹和文件名
        items = dirs + files
        
        for name in items:
            # 检查名字中是否包含空格
            if ' ' in name:
                # 使用 replace(old, new, count) 只替换第一个空格
                new_name = name.replace(' ', '_', 1)
                
                # 构建完整的旧路径和新路径
                old_path = os.path.join(root, name)
                new_path = os.path.join(root, new_name)
                
                try:
                    os.rename(old_path, new_path)
                    print(f"成功: '{name}' -> '{new_name}'")
                except Exception as e:
                    print(f"失败: 无法重命名 '{name}'，错误: {e}")

if __name__ == "__main__":
    folder_input = input("请输入文件夹的完整路径: ").strip()
    # 去除路径可能自带的引号（比如直接拖入命令行时生成的）
    folder_input = folder_input.replace('"', '').replace("'", "")
    
    rename_files_and_folders(folder_input)
    print("\n任务处理完成。")