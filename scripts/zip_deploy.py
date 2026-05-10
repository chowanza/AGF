import shutil
import os

source_dir = 'webuzo_deploy'
output_filename = 'agfgrouph_webuzo_FULL'

print(f"Zipping {source_dir} to {output_filename}.zip...")
shutil.make_archive(output_filename, 'zip', source_dir)
print("Done!")
