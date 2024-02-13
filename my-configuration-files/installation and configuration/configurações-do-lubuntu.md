  enabling hibernation
1. create a swap partion at least 2 times larger than your ram
2. go to enable swap partion
3. find de UUID of the swap partion running: 
	sudo blkid
4. edit /etc/fstab and add the line below with the uuid of your swap partion: 
UUID=your-swap-partion-uuid                                 none           swap    defaults   0 0
5. edit the file and modifie GRUB_CMDLINE_LINUX to GRUB_CMDLINE_LINUX="resume=UUID=your-swap-partion-uuid" /etc/default/grub 
6. update grub to apply the changes run the following comand :
   sudo update-grub
  
	making the computer hibernate when we close the lid
1.run the following comand
	lxqt-config 
and go to power management setting > Lid > Action when lid is close > On AC > Hibernate


	
